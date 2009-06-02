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
package net.sourceforge.cilib.functions.continuous.dynamic.moo.fda1;

import net.sourceforge.cilib.functions.ContinuousFunction;
import net.sourceforge.cilib.type.types.container.Vector;
import net.sourceforge.cilib.problem.FunctionMinimisationProblem;

/**
 * This function is the g*h function of the FDA1 problem defined on page 428 in the following paper:
 * M.Farina, K.Deb, P.Amato. Dynamic multiobjective optimization problems: test cases, approximations
 * and applications, IEEE Transactions on Evolutionary Computation, 8(5): 425-442, 2003
 *
 * @author Marde Greeff
 */

public class FDA1_f2 extends ContinuousFunction {

    private static final long serialVersionUID = 6369118486095689078L;

    //member
    ContinuousFunction fda1_g;
    ContinuousFunction fda1_h;
    FunctionMinimisationProblem fda1_g_problem;
    FunctionMinimisationProblem fda1_h_problem;

    /**
     * Default constructor
     */
    public FDA1_f2() {
        super();
        setDomain("R(-1, 1)^20");
    }

    /**
     * Copy constructor
     */
    public FDA1_f2(FDA1_f2 copy) {
        super(copy);
        this.setDomain(copy.getDomain());
        this.setFDA1_g(copy.getFDA1_g());
        this.setFDA1_g(copy.getFDA1_g_problem());
        this.setFDA1_h(copy.getFDA1_h());
        this.setFDA1_h(copy.getFDA1_h_problem());
    }

    /**
     * Returns a clone
     */
    public FDA1_f2 getClone() {
        return new FDA1_f2(this);
    }

    /**
     * Sets the g function
     * @param problem
     */
    public void setFDA1_g(FunctionMinimisationProblem problem) {
        this.fda1_g_problem = problem;
        this.fda1_g = (ContinuousFunction)problem.getFunction();
        this.fda1_g.setDomain(fda1_g.getDomainRegistry().getDomainString());
    }

    /**
     * returns the problem used to set the g function
     * @return
     */
    public FunctionMinimisationProblem getFDA1_g_problem() {
        return this.fda1_g_problem;
    }

    /**
     * Sets the g function that is used in the FDA1 problem
     * @param fda1_g
     */
    public void setFDA1_g(ContinuousFunction fda1_g) {
        this.fda1_g = fda1_g;
        this.setDomain(fda1_g.getDomainRegistry().getDomainString());
    }

    /**
     * Returns the g function that is used in the FDA1 problem
     * @return
     */
    public ContinuousFunction getFDA1_g() {
        return this.fda1_g;
    }

    /**
     * Sets the h function
     * @param problem
     */
    public void setFDA1_h(FunctionMinimisationProblem problem) {
        this.fda1_h_problem = problem;
        this.fda1_h = (ContinuousFunction)problem.getFunction();
        this.fda1_h.setDomain(fda1_h.getDomainRegistry().getDomainString());
    }

    /**
     * returns the problem used to set the h function
     * @return
     */
    public FunctionMinimisationProblem getFDA1_h_problem() {
        return this.fda1_h_problem;
    }

    /**
     * Sets the f1 function that is used in the FDA1 problem
     * @param fda1_f1
     */
    public void setFDA1_h(ContinuousFunction fda1_h) {
        this.fda1_h = fda1_h;
        this.setDomain(fda1_h.getDomainRegistry().getDomainString());
    }

    /**
     * Gets the f1 function that is used in the FDA1 problem
     * @return
     */
    public ContinuousFunction getFDA1_h() {
        return this.fda1_h;
    }

    /**
     * Evaluates the function
     * g*h
     */
    public double evaluate(Vector x) {

        Vector y = x.subList(1, x.getDimension()-1);
        double g = this.fda1_g.evaluate(y);
        double h = this.fda1_h.evaluate(x);

        double value = g*h;

        return value;
    }
}