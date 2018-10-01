const BlackHoleObject = Proxy.bind(null, function() { return new BlackHoleObject(); }, {
  get(_target: () => any, _property: string|symbol, receiver: any) {
    return receiver;
  },
});

export default BlackHoleObject;
