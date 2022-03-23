import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {AlarmModel, AlarmSnapshot, emptyAlarm} from '../alarm/Alarm';
// import {CharacterApi} from '../../services/api/character-api';
import {withEnvironment} from '../extensions/with-environment';

export const AlarmStoreModel = types
  .model('AlarmStore')
  .props({
    alarms: types.optional(types.array(AlarmModel), []),
  })
  .extend(withEnvironment)
  .actions(self => ({
    saveCharacters: (alarmSnapshots: AlarmSnapshot[]) => {
      self.alarms.replace(alarmSnapshots);
    },
  }))
  .actions(self => ({
    getCharacters: async () => {
      //   const characterApi = new CharacterApi(self.environment.api);
      //   const result = await characterApi.getCharacters();
      //   if (result.kind === 'ok') {
      //     self.saveCharacters(result.characters);
      //   } else {
      //     __DEV__ && console.tron.log(result.kind);
      //   }
    },
  }));

type AlarmStoreType = Instance<typeof AlarmStoreModel>;
export interface AlarmStore extends AlarmStoreType {}

type AlarmStoreSnapshotType = SnapshotOut<typeof AlarmStoreModel>;
export interface CharacterStoreSnapshot extends AlarmStoreSnapshotType {}

const defaultAlarmStore: AlarmStoreType = {
  alarms: [emptyAlarm],
};
export const createAlarmStoreDefaultModel = () =>
  types.optional(AlarmStoreModel, defaultAlarmStore);
