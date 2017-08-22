import { Pipe, PipeTransform } from '@angular/core';
import { AppConstants } from './AppConstants';

@Pipe({
  name: 'filterStatus'
})
export class DevicesFilter implements PipeTransform {

  transform(items: any[], filterDeviceNameOrDeviceStatus: string): object[] {
    items = items || [];
    return items.filter((item) => {
      if (filterDeviceNameOrDeviceStatus === AppConstants.FILTER_ALL) {
        return true;
      } else if (filterDeviceNameOrDeviceStatus === AppConstants.FILTER_ONLINE) {
        return item.info.client_id;
      } else if (filterDeviceNameOrDeviceStatus === AppConstants.FILTER_OFFLINE) {
        return item.info.client_id === undefined;
      } else {
        return `${item.d.myName}`.toLowerCase() === filterDeviceNameOrDeviceStatus;
      }
    });
  }
}
