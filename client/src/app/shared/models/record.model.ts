import { Record } from 'immutable';

export interface IRecord<T> extends Record<T> {
  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3]>(path: [K1, K2, K3, K4]): T[K1][K2][K3][K4];

  getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(path: [K1, K2, K3]): T[K1][K2][K3];

  getIn<K1 extends keyof T, K2 extends keyof T[K1]>(path: [K1, K2]): T[K1][K2];

  getIn<K1 extends keyof T>(path: [K1]): T[K1];

  setIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(
    path: [K1, K2, K3, K4], value: T[K1][K2][K3][K4]): this;

  setIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(path: [K1, K2, K3], value: T[K1][K2][K3]): this;

  setIn<K1 extends keyof T, K2 extends keyof T[K1]>(path: [K1, K2], value: T[K1][K2]): this;

  setIn<K1 extends keyof T>(path: [K1], value: T[K1]): this;

  updateIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(
    path: [K1, K2, K3, K4], updater: (value: T[K1][K2][K3][K4]) => T[K1][K2][K3][K4]): this;

  updateIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(
    path: [K1, K2, K3], updater: (value: T[K1][K2][K3]) => T[K1][K2][K3]): this;

  updateIn<K1 extends keyof T, K2 extends keyof T[K1]>(path: [K1, K2], updater: (value: T[K1][K2]) => T[K1][K2]): this;

  updateIn<K1 extends keyof T>(path: [K1], updater: (value: T[K1]) => T[K1]): this;

  removeIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3]>(path: [K1, K2, K3, K4]): this;

  removeIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(path: [K1, K2, K3]): this;

  removeIn<K1 extends keyof T, K2 extends keyof T[K1]>(path: [K1, K2]): this;

  removeIn<K1 extends keyof T>(path: [K1]): this;
}
