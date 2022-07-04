import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }
  axiosGet(api: any) {
    return new Promise((resolve, reject) => {
      axios.get(api).then(function (response) {
        resolve(response)
      }).catch(function (error) {
        console.log(error);
      })
    })
  }
}
