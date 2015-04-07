import sbt._
import Keys._
import sbtrelease._
import sbtrelease.ReleasePlugin._
import sbtrelease.ReleasePlugin.ReleaseKeys._
import sbtrelease.ReleaseStateTransformations._
import sbtrelease.Utilities._

val scalazVersion = "7.1.0"

lazy val buildSettings = Seq(
  organization := "net.cilib",
  scalaVersion := "2.11.6",
  crossScalaVersions := Seq("2.11.6")
)

lazy val commonSettings = Seq(
  scalacOptions ++= Seq(
    "-deprecation",
    "-encoding", "UTF-8",
    "-feature",
    "-language:existentials",
    "-language:higherKinds",
    "-language:implicitConversions",
    "-language:experimental.macros",
    "-unchecked",
    "-Xfatal-warnings",
    "-Xlint",
    "-Yno-adapted-args",
    "-Ywarn-dead-code",
    "-Ywarn-numeric-widen",
    "-Ywarn-value-discard",
    "-Xfuture"
  ),
  resolvers ++= Seq(
    Resolver.sonatypeRepo("releases")
  ),
  libraryDependencies ++= Seq(
    compilerPlugin("org.spire-math" %% "kind-projector" % "0.5.2")
  ),
  scmInfo := Some(ScmInfo(url("https://github.com/cilib/cilib"),
    "git@github.com:cilib/cilib.git"))
)

lazy val publishSignedArtifacts = ReleaseStep(
  action = st => {
    val extracted = st.extract
    val ref = extracted.get(thisProjectRef)
    extracted.runAggregated(PgpKeys.publishSigned in Global in ref, st)
  },
  check = st => {
    // getPublishTo fails if no publish repository is set up.
    val ex = st.extract
    val ref = ex.get(thisProjectRef)
    Classpaths.getPublishTo(ex.get(publishTo in Global in ref))
    st
  },
  enableCrossBuild = true
)

lazy val noPublishSettings = Seq(
  publish := (),
  publishLocal := (),
  publishArtifact := false
)

lazy val publishSettings = Seq(
  organizationHomepage := Some(url("http://cirg.cs.up.ac.za")),
  homepage := Some(url("http://www.cilib.net")),
  licenses := Seq("BSD-style" -> url("http://opensource.org/licenses/BSD-2-Clause")),//Seq("MIT" -> url("http://opensource.org/licenses/MIT")),
  autoAPIMappings := true,
  apiURL := Some(url("https://www.cilib.net/api/")),
  publishMavenStyle := true,
  publishArtifact in packageDoc := false,
  publishArtifact in Test := false,
  pomIncludeRepository := { _ => false },
  publishTo <<= version { (v: String) =>
    val nexus = "https://oss.sonatype.org/"
    if (v.trim.endsWith("SNAPSHOT"))
      Some("snapshots" at nexus + "content/repositories/snapshots")
    else
      Some("releases" at nexus + "service/local/staging/deploy/maven2")
  },
  pomExtra := (
    <scm>
      <url>git@github.com:cilib/cilib.git</url>
      <connection>scm:git:git@github.com:cilib/cilib.git</connection>
    </scm>
    <developers>
      {
        Seq(
          ("gpampara", "Gary Pamparà"),
          ("filinep", "Filipe Nepomuceno"),
          ("benniel", "Bennie Leonard")
        ).map {
          case (id, name) =>
            <developer>
              <id>{id}</id>
              <name>{name}</name>
              <url>http://github.com/{id}</url>
            </developer>
        }
      }
    </developers>
  ),
  releaseProcess := Seq[ReleaseStep](
    checkSnapshotDependencies,
    inquireVersions,
    runTest,
    setReleaseVersion,
    commitReleaseVersion,
    tagRelease,
    publishSignedArtifacts,
    setNextVersion,
    commitNextVersion
    //pushChanges
  )
)

lazy val cilibSettings = buildSettings ++ commonSettings ++ publishSettings ++ releaseSettings

lazy val cilib = project.in(file("."))
  .settings(cilibSettings)
  .settings(noPublishSettings)
  .aggregate(core, example, tests)
  .dependsOn(core, example, tests)

//   lazy val cilibSettings = settings ++ Seq(
//     name := "cilib-aggregate"
//   ) ++ noPublish ++ headerCheckSetting ++ releaseSettings ++ Seq(
//     publishArtifactsAction := PgpKeys.publishSigned.value
//   )

lazy val core = project
  .settings(moduleName := "cilib-core")
  .settings(cilibSettings)
  .settings(Seq(
    libraryDependencies ++= Seq(
      "org.scalaz"                  %% "scalaz-core"   % scalazVersion,
      "org.typelevel"               %% "scalaz-spire"  % "0.2",
      "org.spire-math"              %% "spire"         % "0.9.0",
      "com.github.julien-truffaut"  %% "monocle-core"  % "1.0.1"
    )
  ))

lazy val example = project.dependsOn(core)
  .settings(moduleName := "cilib-example")
  .settings(cilibSettings)
  .settings(noPublishSettings)

lazy val tests = project.dependsOn(core)
  .settings(moduleName := "cilib-tests")
  .settings(cilibSettings)
  .settings(
    libraryDependencies ++= Seq(
      "org.scalacheck" %% "scalacheck" % "1.12.1" % "test"
    )
  )
  .settings(noPublishSettings)