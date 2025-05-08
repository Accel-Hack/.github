import ADET from '@/asset/img/service/ADeT.png';
import ADET1 from '@/asset/img/service/adet1.png';
import ADET2 from '@/asset/img/service/adet2.png';
import MOCK from '@/asset/img/service/mockApp.png';
import MOCK1 from '@/asset/img/service/mockapp1.jpeg';
import MOCK2 from '@/asset/img/service/mockapp2.jpeg';
import DEV from '@/asset/img/service/develop.png';
import DEV1 from '@/asset/img/service/dev1.jpeg';
import DEV2 from '@/asset/img/service/dev2.jpg';

export default class ServiceImgSrcUtil {
  static convertServiceImageSrc(name: string): string {
    switch (name) {
      case 'adet':
        return ADET.src;
      case 'adet1':
        return ADET1.src;
      case 'adet2':
        return ADET2.src;
      case 'mockapp':
        return MOCK.src;
      case 'mockapp1':
        return MOCK1.src;
      case 'mockapp2':
        return MOCK2.src;
      case 'development':
        return DEV.src;
      case 'development1':
        return DEV1.src;
      case 'development2':
        return DEV2.src;
      default:
        return '';
    }
  }
}
