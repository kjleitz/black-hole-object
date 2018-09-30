const BlackHoleObject = Proxy.bind(null, function(this: any) { return this; }, {
  get(_target: () => any, _property: string|symbol, receiver: any) {
    return receiver;
  },
});

export default BlackHoleObject;
