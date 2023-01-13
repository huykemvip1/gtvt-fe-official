import { Category } from './../enumeration/category-types';
import { GenderType } from './../enumeration/gender-type';
import { JobPositionType } from './../enumeration/job-position-type';
import { JobTitleType } from './../enumeration/job-title-type';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class CommonService {
    covertJobTitleToString(value : number | null | undefined): string {
        switch(value){
            case JobTitleType.DAIHOC.value :
                return JobTitleType.DAIHOC.display
            case JobTitleType.GIAOSU.value :
                return JobTitleType.GIAOSU.display
            case JobTitleType.PHOGIAOSU.value :
                return JobTitleType.PHOGIAOSU.display
            case JobTitleType.THACSI.value :
                return JobTitleType.THACSI.display
            case JobTitleType.TIENSI.value :
                return JobTitleType.TIENSI.display
        }
        return ''
    }
    covertJobPositionToString(value : number | null | undefined) : string {
        switch(value){
            
            case JobPositionType.CUUSINHVIEN.value :
                return JobPositionType.CUUSINHVIEN.display
            case JobPositionType.GIANGVIEN.value :
                return JobPositionType.GIANGVIEN.display
            case JobPositionType.TRUONGBOMON.value :
                return JobPositionType.TRUONGBOMON.display
            case JobPositionType.SINHVIEN.value :
                return JobPositionType.SINHVIEN.display
        }
        return ''       
    }
    convertGenderToString(value : number | null | undefined ) : string {
        switch(value){
            case GenderType.NAM.value :
                return GenderType.NAM.display
            case GenderType.NU.value :
                return GenderType.NU.display
        }
        return ''
    }

    covertCategoryNewsToString(value : number | null | undefined){
        switch(value){
            case Category.KhoaHoc.value:
                return Category.KhoaHoc.display
            case Category.ThongBao.value:
                return Category.ThongBao.display
            case Category.TuyenDung.value:
                return Category.TuyenDung.display
        }
        return ''
    }

    covertLongToDate(value : number | null | undefined) {
        let date = new Date()
        if (value !== null && value !== undefined){
            date.setMilliseconds(value)
        }
        return date
    }
  }