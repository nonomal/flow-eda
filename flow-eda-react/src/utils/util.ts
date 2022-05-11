import {useIntl} from 'umi';

/**生成指定长度的唯一ID*/
export function generateUniqueID(length: number) {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

/**国际化*/
export const useFormatMessage = () => {
  const {formatMessage} = useIntl();
  return {
    formatMsg: (id: string, defaultMsg?: string) =>
      formatMessage({id: id, defaultMessage: defaultMsg}),
  };
};