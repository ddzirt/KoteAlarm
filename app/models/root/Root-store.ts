import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {createAlarmStoreDefaultModel} from '../alarm-store/Alarm-store';

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model('RootStore').props({
  alarmStore: createAlarmStoreDefaultModel(),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
