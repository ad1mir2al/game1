const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Physics,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Physics.Acts.CreateRevoluteJoint,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Physics.Acts.ApplyTorque,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.AngleWithin,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Физика: 0},
	{дорога: 0},
	{байкер: 0},
	{колесо1: 0},
	{колесо2: 0},
	{Клавиатура: 0}
];

self.InstanceType = {
	дорога: class extends self.ISpriteInstance {},
	байкер: class extends self.ISpriteInstance {},
	колесо1: class extends self.ISpriteInstance {},
	колесо2: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {}
}