
const reduce = (ref, event, reducer) => (reducer !== undefined) ? ref.on(event, reducer) : undefined;

export  const setup = (ref, reducers) => ({
  onValue: reduce(ref, 'value', reducers.onValue),
  onChildAdded: reduce(ref, 'child_added', reducers.onChildAdded),
  onChildChanged: reduce(ref, 'child_changed', reducers.onChildChanged),
  onChildRemoved: reduce(ref, 'child_removed', reducers.onChildRemoved)
});