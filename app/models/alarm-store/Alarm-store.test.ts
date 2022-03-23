import {AlarmStoreModel} from './Alarm-store';

test('can be created', () => {
  const instance = AlarmStoreModel.create({});

  expect(instance).toBeTruthy();
});
