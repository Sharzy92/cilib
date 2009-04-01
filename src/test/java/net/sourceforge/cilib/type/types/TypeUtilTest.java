/**
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
package net.sourceforge.cilib.type.types;

import net.sourceforge.cilib.type.types.container.Vector;
import org.junit.Assert;
import org.junit.Test;

/**
 *
 * @author gpampara
 */
public class TypeUtilTest {

    @Test
    public void randomizeStructuredType() {
        Vector vector = new Vector(30, new Real(-5.0, 5.0));

        TypeUtil.randomize(vector);

        for (Type type : vector) {
            Real r = (Real) type;
            Assert.assertFalse(Double.compare(0.0, r.getReal()) == 0);
            Assert.assertTrue(r.getBounds().getLowerBound() <= r.getReal() && r.getBounds().getUpperBound() >= r.getReal());
        }
    }

    @Test
    public void structureDimension() {
        Vector vector = new Vector();
        Assert.assertEquals(0, TypeUtil.getDimension(vector));

        vector.add(new Real());
        Assert.assertEquals(1, TypeUtil.getDimension(vector));
    }

    @Test
    public void nonStructureDimension() {
        Real r = new Real();

        Assert.assertEquals(1, TypeUtil.getDimension(r));
    }

    @Test
    public void structureIsInsideBounds() {
        Vector vector = new Vector();
        Real r = new Real(-5.0, 5.0);
        r.setReal(-7.0);

        vector.add(r);

        Assert.assertFalse(TypeUtil.isInsideBounds(vector));
    }
}
