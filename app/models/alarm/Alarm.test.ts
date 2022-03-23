import {AlarmModel} from './Alarm';

test('can be created', () => {
  const instance = AlarmModel.create({
    id: 1,
    name: 'test 1',
  });

  expect(instance).toBeTruthy();
});
