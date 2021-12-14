import { toNumber } from 'lodash';
import toLower from 'lodash/toLower';
import cloneDeep from 'lodash/cloneDeep';
import numeral from 'numeral';
import { BigNumber, ethers } from 'ethers';
const gzip = require('gzip-js');

export const isOwned = (myAddress: string, nftOwnedIdAddress: string) =>
  toLower(myAddress) === toLower(nftOwnedIdAddress);

export const formatWalletAddress = (address: string, toNumber = 4) => {
  const _stringDel = address.substring(6, address.length - toNumber);
  return address.replace(_stringDel, '...');
};

export const normalizeIntNumber = (value = '', max: string | number) => {
  if (!value?.trim() && value !== '0') {
    return '';
  }

  const newValue = toNumber(value.replace(/[^0-9]/g, ''));
  if (max && newValue > toNumber(max)) return max;
  return newValue;
};
