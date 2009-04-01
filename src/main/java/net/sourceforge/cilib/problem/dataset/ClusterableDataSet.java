/*
 * Copyright (C) 2003 - 2008
 * Computational Intelligence Research Group (CIRG@UP)
 * Department of Computer Science
 * University of Pretoria
 * South Africa
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */
package net.sourceforge.cilib.problem.dataset;

import java.util.ArrayList;

import net.sourceforge.cilib.type.types.container.Vector;
import net.sourceforge.cilib.util.Cloneable;

/**
 * All datasets that will be clustered have to implement this interface.
 * @author Theuns Cloete
 */
public interface ClusterableDataSet {

    public int getNumberOfPatterns();

    public Pattern getPattern(int index);

    public ArrayList<Pattern> getPatterns();
    public Vector getMean();
    public double getVariance();
    public double getCachedDistance(int x, int y);
    public void initialise();

    /**
     * TODO: Complete this javadoc.
     */
    public class Pattern implements Cloneable {
        private static final long serialVersionUID = 8831874859964777328L;
        private String clas = "<not set>";
        public Vector data = null;

        public Pattern(String c, Vector d) {
            clas = c;
            data = d;
        }

        public Pattern(Pattern rhs) {
            clas = rhs.clas;
            data = rhs.data;
        }

        public Pattern getClone() {
            return new Pattern(this);
        }

        public String toString() {
            return clas + " -> " + data;
        }
    }
}
