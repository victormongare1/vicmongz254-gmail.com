import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDiffrence = Math.abs(value - todayWithNoTime)//returns value in milliseconds
    const secondsInDay= 86400; //60secs * 60mins * 24hours
    var dateDiffrenceSeconds = dateDiffrence*0.001; //converts milliseconds to seconds
    var dateCounter = dateDiffrenceSeconds/secondsInDay;

    if (dateCounter >=1 && value > todayWithNoTime){
      return dateCounter;
    }
    else{
      return 0  
    }
  }

}
