/*global defineSuite*/
defineSuite([
             'DynamicScene/DynamicBillboard',
             'Core/Cartesian2',
             'Core/Cartesian3',
             'Core/Color',
             'Scene/HorizontalOrigin',
             'Scene/VerticalOrigin',
             'DynamicScene/ConstantProperty'
         ], function(
             DynamicBillboard,
             Cartesian2,
             Cartesian3,
             Color,
             HorizontalOrigin,
             VerticalOrigin,
             ConstantProperty) {
    "use strict";
    /*global jasmine,describe,xdescribe,it,xit,expect,beforeEach,afterEach,beforeAll,afterAll,spyOn,runs,waits,waitsFor*/

    it('merge assigns unassigned properties', function() {
        var source = new DynamicBillboard();
        source.image = new ConstantProperty('');
        source.rotation = new ConstantProperty(5);
        source.alignedAxis = new ConstantProperty(new Cartesian3());
        source.color = new ConstantProperty(Color.BLACK);
        source.horizontalOrigin = new ConstantProperty(HorizontalOrigin.LEFT);
        source.verticalOrigin = new ConstantProperty(VerticalOrigin.BOTTOM);
        source.eyeOffset = new ConstantProperty(Cartesian3.UNIT_Y);
        source.pixelOffset = new ConstantProperty(Cartesian2.UNIT_X);
        source.scale = new ConstantProperty(1);
        source.show = new ConstantProperty(false);
        source.width = new ConstantProperty(24);
        source.height = new ConstantProperty(36);

        var target = new DynamicBillboard();
        target.merge(source);

        expect(target.image).toBe(source.image);
        expect(target.rotation).toBe(source.rotation);
        expect(target.alignedAxis).toBe(source.alignedAxis);
        expect(target.color).toBe(source.color);
        expect(target.horizontalOrigin).toBe(source.horizontalOrigin);
        expect(target.verticalOrigin).toBe(source.verticalOrigin);
        expect(target.eyeOffset).toBe(source.eyeOffset);
        expect(target.pixelOffset).toBe(source.pixelOffset);
        expect(target.scale).toBe(source.scale);
        expect(target.show).toBe(source.show);
        expect(target.width).toBe(source.width);
        expect(target.height).toBe(source.height);
    });

    it('merge does not assign assigned properties', function() {
        var source = new DynamicBillboard();
        source.image = new ConstantProperty('');
        source.rotation = new ConstantProperty(5);
        source.alignedAxis = new ConstantProperty(new Cartesian3());
        source.color = new ConstantProperty(Color.BLACK);
        source.horizontalOrigin = new ConstantProperty(HorizontalOrigin.LEFT);
        source.verticalOrigin = new ConstantProperty(VerticalOrigin.BOTTOM);
        source.eyeOffset = new ConstantProperty(Cartesian3.UNIT_Y);
        source.pixelOffset = new ConstantProperty(Cartesian2.UNIT_X);
        source.scale = new ConstantProperty(1);
        source.show = new ConstantProperty(false);
        source.width = new ConstantProperty(24);
        source.height = new ConstantProperty(36);

        var image = new ConstantProperty('');
        var rotation = new ConstantProperty(5);
        var alignedAxis = new ConstantProperty(new Cartesian3());
        var color = new ConstantProperty(Color.BLACK);
        var horizontalOrigin = new ConstantProperty(HorizontalOrigin.LEFT);
        var verticalOrigin = new ConstantProperty(VerticalOrigin.BOTTOM);
        var eyeOffset = new ConstantProperty(Cartesian3.UNIT_Y);
        var pixelOffset = new ConstantProperty(Cartesian2.UNIT_X);
        var scale = new ConstantProperty(1);
        var show = new ConstantProperty(false);
        var width = new ConstantProperty(2);
        var height = new ConstantProperty(3);

        var target = new DynamicBillboard();
        target.image = image;
        target.rotation = rotation;
        target.alignedAxis = alignedAxis;
        target.color = color;
        target.horizontalOrigin = horizontalOrigin;
        target.verticalOrigin = verticalOrigin;
        target.eyeOffset = eyeOffset;
        target.pixelOffset = pixelOffset;
        target.scale = scale;
        target.show = show;
        target.width = width;
        target.height = height;

        target.merge(source);

        expect(target.image).toBe(image);
        expect(target.rotation).toBe(rotation);
        expect(target.alignedAxis).toBe(alignedAxis);
        expect(target.color).toBe(color);
        expect(target.horizontalOrigin).toBe(horizontalOrigin);
        expect(target.verticalOrigin).toBe(verticalOrigin);
        expect(target.eyeOffset).toBe(eyeOffset);
        expect(target.pixelOffset).toBe(pixelOffset);
        expect(target.scale).toBe(scale);
        expect(target.show).toBe(show);
        expect(target.width).toBe(width);
        expect(target.height).toBe(height);
    });

    it('clone works', function() {
        var source = new DynamicBillboard();
        source.image = new ConstantProperty('');
        source.rotation = new ConstantProperty(5);
        source.alignedAxis = new ConstantProperty(new Cartesian3());
        source.color = new ConstantProperty(Color.BLACK);
        source.horizontalOrigin = new ConstantProperty(HorizontalOrigin.LEFT);
        source.verticalOrigin = new ConstantProperty(VerticalOrigin.BOTTOM);
        source.eyeOffset = new ConstantProperty(Cartesian3.UNIT_Y);
        source.pixelOffset = new ConstantProperty(Cartesian2.UNIT_X);
        source.scale = new ConstantProperty(1);
        source.show = new ConstantProperty(false);
        source.width = new ConstantProperty(24);
        source.height = new ConstantProperty(36);

        var result = source.clone();
        expect(result.image).toBe(source.image);
        expect(result.rotation).toBe(source.rotation);
        expect(result.alignedAxis).toBe(source.alignedAxis);
        expect(result.color).toBe(source.color);
        expect(result.horizontalOrigin).toBe(source.horizontalOrigin);
        expect(result.verticalOrigin).toBe(source.verticalOrigin);
        expect(result.eyeOffset).toBe(source.eyeOffset);
        expect(result.pixelOffset).toBe(source.pixelOffset);
        expect(result.scale).toBe(source.scale);
        expect(result.show).toBe(source.show);
        expect(result.width).toBe(source.width);
        expect(result.height).toBe(source.height);
    });

    it('merge throws if source undefined', function() {
        var target = new DynamicBillboard();
        expect(function() {
            target.merge(undefined);
        }).toThrow();
    });
});