import {Instance, SnapshotOut, types} from 'mobx-state-tree';

export const AlarmModel = types.model('Alarm').props({
  id: types.identifierNumber,
  name: types.maybe(types.string),
  status: types.maybe(types.boolean),
  recurring: types.maybe(types.boolean),
  time: types.maybe(types.Date),
});

type AlarmType = Instance<typeof AlarmModel>;
export interface Alarm extends AlarmType {}

type AlarmSnapshotType = SnapshotOut<typeof AlarmModel>;
export interface AlarmSnapshot extends AlarmSnapshotType {}

export const emptyAlarm: AlarmType = {
  id: -1,
  name: 'default',
  status: false,
  recurring: false,
  time: undefined,
};
export const createAlarmDefaultModel = () =>
  types.optional(AlarmModel, emptyAlarm);
