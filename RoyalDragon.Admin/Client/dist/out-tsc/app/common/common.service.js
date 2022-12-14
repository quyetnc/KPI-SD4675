import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { FORMAT_DATE } from "./COMMON_FORMAT.const";
import Swal from "sweetalert2";
// import { TimeSpan } from "app/api/models"; 
import * as FileSaver from "file-saver";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";
let CommonService = class CommonService {
    constructor(_config) {
        this._config = _config;
        this.FORMAT_DATE = FORMAT_DATE;
        //   VERSION = enviromentConst;
        this.CURRENT_VERSION = "NCQ";
        //#region TIME FORMATTER
        this.currentGMT = 0;
        this.currentGMT = this.getCurrentGMT();
        localStorage["ver"] = "NCQ";
    }
    getCurrentGMT() {
        let offset = new Date().getTimezoneOffset();
        let gmt = -offset / 60;
        return gmt;
    }
    toTimeUtc(dateTime) {
        return dateTime?.toISOString();
    }
    // public toDateTime(date: Date): string {
    //   if (date == null || date == undefined || date.toString() == "Invalid Date")
    //     return "";
    //   let day, month, year, hour, minute, second, dateTime;
    //   day = date.getDate();
    //   month = date.getMonth() + 1;
    //   year = date.getFullYear();
    //   hour = date.getHours();
    //   minute = date.getMinutes();
    //   second = date.getSeconds();
    //   dateTime =
    //     day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
    //   return dateTime;
    // }
    // public toTimeLocal(timeUTC: Date): Date {
    //   var result = new Date(
    //     timeUTC.getTime() + timeUTC.getTimezoneOffset() * 60 * 1000
    //   );
    //   var offset = timeUTC.getTimezoneOffset() / 60;
    //   var hours = timeUTC.getHours();
    //   result.setHours(hours - offset);
    //   return result;
    // }
    // public toTimeNormal(timeUTC: Date): Date {
    //   var result = new Date(timeUTC.getTime());
    //   var offset = timeUTC.getTimezoneOffset() / 60;
    //   var hours = timeUTC.getHours();
    //   result.setHours(hours - offset);
    //   return result;
    // }
    // public toTimeLocalString(timeUTC: Date) {
    //   var _dateConvert = this.toTimeLocal(timeUTC);
    //   return result;
    // }
    //#endregion
    //#region TIME BOOTSTRAP
    // ngbDateToUtc(ngDate: NgbDate): string {
    //   if (ngDate && ngDate.year && ngDate.month && ngDate.day) {
    //     let date = new Date(ngDate.year, ngDate.month - 1, ngDate.day);
    //     if (date) {
    //       return this.toTimeUtc(date);
    //     }
    //   }
    //   return null;
    // }
    dateFormat(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
    ngbDateToDateLocal(ngDate) {
        if (ngDate && ngDate.year && ngDate.month && ngDate.day) {
            let date = new Date(ngDate.year, ngDate.month - 1, ngDate.day);
            var offset = date.getTimezoneOffset() / 60;
            var hours = date.getHours();
            date.setHours(hours - offset);
            if (date) {
                return this.dateFormat(date);
            }
        }
        return null;
    }
    // utcToNgbDate(utcTime): NgbDate {
    //   if (!utcTime) {
    //     return null;
    //   }
    //   let utc = this.toTimeLocal(new Date(utcTime));
    //   if (!utc) {
    //     return null;
    //   }
    //   let result = NgbDate.from({
    //     year: utc.getFullYear(),
    //     month: utc.getMonth() + 1,
    //     day: utc.getDate(),
    //   });
    //   return result;
    // }
    // localTimeToNgbDate(localTime): NgbDate {
    //   if (!localTime) {
    //     return null;
    //   }
    //   let utc = this.toTimeNormal(new Date(localTime));
    //   if (!utc) {
    //     return null;
    //   }
    //   let result = NgbDate.from({
    //     year: utc.getFullYear(),
    //     month: utc.getMonth() + 1,
    //     day: utc.getDate(),
    //   });
    //   return result;
    // }
    // convertStringToDate(str): NgbDate {
    //   if (!str) {
    //     return null;
    //   }
    //   let d = new Date(str);
    //   if (!d) {
    //     return null;
    //   }
    //   let result = NgbDate.from({
    //     year: d.getFullYear(),
    //     month: d.getMonth() + 1,
    //     day: d.getDate(),
    //   });
    //   return result;
    // }
    // dateTimePipeFormat(e): string {
    //   let datepipe: DatePipe = new DatePipe("en-US");
    //   return datepipe.transform(e, "dd/MM/YYYY HH:mm:ss");
    // }
    // datePipeFormat(e): string {
    //   let datepipe: DatePipe = new DatePipe("en-US");
    //   return datepipe.transform(e, "dd/MM/YYYY");
    // }
    // dateStringFormat(e: string) {
    //   let inputString = e.slice(0, 10);
    //   let date = new Date(inputString);
    //   return this.datePipe.transform(date, "dd/MM/yyyy"); //whatever format you need.
    // }
    //#region
    //#region SweetAlert
    sweetAlert(title, textHtml, isSuccess) {
        if (isSuccess) {
            Swal.fire({
                icon: "success",
                title: title,
                html: textHtml,
                customClass: {
                    confirmButton: "btn btn-success",
                },
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: title,
                html: textHtml,
                customClass: {
                    confirmButton: "btn btn-danger",
                },
            });
        }
    }
    sweetAlertResponse(rs) {
        Swal.fire({
            icon: rs.success ? "success" : "error",
            title: "",
            html: rs.message,
            customClass: {
                confirmButton: rs.success ? "btn btn-success" : "btn btn-danger",
            },
        });
    }
    sweetAlertUnknownError() {
        Swal.fire({
            icon: "error",
            title: "Unknown Error",
            html: "Unknown Error",
            customClass: {
                confirmButton: "btn btn-danger",
            },
        });
    }
    sweetAlertWithResult(title, result, isSuccess) {
        let textHtml = "";
        if (result) {
            textHtml = this.getMessage(result.message);
        }
        if (isSuccess) {
            Swal.fire({
                icon: "success",
                title: title,
                html: textHtml,
                customClass: {
                    confirmButton: "btn btn-success",
                },
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: title,
                html: textHtml,
                customClass: {
                    confirmButton: "btn btn-success",
                },
            });
        }
    }
    sweetAlertConfirm(title, textHtml, isSuccess = null) {
        return Swal.fire({
            title: title,
            html: textHtml,
            icon: isSuccess == null ? "question" : isSuccess ? "success" : "error",
            showCancelButton: true,
            confirmButtonColor: "#7367F0",
            cancelButtonColor: "#E42728",
            confirmButtonText: "Yes",
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-danger ml-1",
            },
        });
    }
    //#endregion
    sweetAlertAutoClose(title, textHtml, isSuccess, time) {
        if (isSuccess) {
            Swal.fire({
                icon: "success",
                timer: time,
                title: title,
                html: textHtml,
                customClass: {
                    confirmButton: "btn btn-success",
                },
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: title,
                html: textHtml,
                customClass: {
                    confirmButton: "btn btn-success",
                },
            });
        }
    }
    //#region GET LANGUAGE MESSAGE
    getMessage(message) {
        return message ? message[localStorage["language"]] : "";
    }
    enableDragable() {
        $(document).ready(function () {
            let modalContent = $(".modal-content");
            modalContent.draggable({
                handle: ".modal-header",
                revert: false,
                revertDuration: 300,
            });
        });
    }
    preparePagingModel(event, isShowItemDeleted = true) {
        let pageIndex = 0;
        let pageSize = 10;
        if (event) {
            if (event.offset) {
                pageIndex = event.offset + 1;
            }
            if (event.pageSize) {
                pageSize = event.pageSize;
            }
        }
        let paginationRequest = {
            pageIndex: pageIndex,
            pageSize: pageSize,
            isShowItemDeleted: isShowItemDeleted,
        };
        return paginationRequest;
    }
    // WoIdToAutoFresh(woId) {
    //   this.woId.next(woId);
    // }
    // export excel
    //pass array and name file
    //   exportAsExcelFile(json: any[], excelFileName: string): void {
    //     const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    //     const workbook: XLSX.WorkBook = {
    //       Sheets: { data: worksheet },
    //       SheetNames: ["data"],
    //     };
    //     const excelBuffer: any = XLSX.write(workbook, {
    //       bookType: "xlsx",
    //       type: "array",
    //     });
    //     //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    //     this.saveAsExcelFile(excelBuffer, excelFileName);
    //   }
    //   saveAsExcelFile(buffer: any, fileName: string): void {
    //     const data: Blob = new Blob([buffer], {
    //       type: EXCEL_TYPE,
    //     });
    //     FileSaver.saveAs(
    //       data,
    //       fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    //     );
    //   }
    convertNumberToString(num, size) {
        if (num) {
            var s = num + "";
            while (s.length < size)
                s = "0" + s;
            return s;
        }
        else {
            return "-";
        }
    }
    s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i)
            view[i] = s.charCodeAt(i) & 0xff;
        return buf;
    }
    downloadExcel(buffer, exportFileName) {
        var bf = this.s2ab(atob(buffer));
        const blob = new Blob([bf], { type: EXCEL_TYPE }); // you can change the type
        FileSaver.saveAs(blob, exportFileName + "_" + new Date().getTime() + EXCEL_EXTENSION);
        // const blob = new Blob(
        //   [
        //     this.base64toBlob(
        //       buffer,
        //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        //     ),
        //   ],
        //   {}
        // ); // you can change the type
        // const url = window.URL.createObjectURL(blob);
    }
    base64toBlob(base64Data, contentType) {
        contentType = contentType || "";
        let sliceSize = 1024;
        let byteCharacters = atob(base64Data);
        let bytesLength = byteCharacters.length;
        let slicesCount = Math.ceil(bytesLength / sliceSize);
        let byteArrays = new Array(slicesCount);
        for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            let begin = sliceIndex * sliceSize;
            let end = Math.min(begin + sliceSize, bytesLength);
            let bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    }
    toDateDDMMYYY(_date) {
        if (!_date)
            return null;
        let date = new Date(_date);
        if (!date)
            return null;
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : "0" + month;
        var day = date.getDate().toString();
        day = day.length > 1 ? day : "0" + day;
        return day + "/" + month + "/" + year;
    }
    formatDateForInputHtml(date) {
        if (date && new Date(date)) {
            const d = new Date(date);
            return `${d.getFullYear().toString().padStart(2, "4")}-${(d.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
        }
        return null;
    }
    removeVietnameseTones(str) {
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
        str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
        str = str.replace(/??|??|???|???|??/g, "i");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
        str = str.replace(/???|??|???|???|???/g, "y");
        str = str.replace(/??/g, "d");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
        str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
        str = str.replace(/??|??|???|???|??/g, "I");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
        str = str.replace(/???|??|???|???|???/g, "Y");
        str = str.replace(/??/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ?? ?? ??  ??, ??, ??, ??, ??
        // Remove extra spaces
        // B??? c??c kho???ng tr???ng li???n nhau
        str = str.replace(/ + /g, " ");
        str = str.trim();
        // Remove punctuations
        // B??? d???u c??u, k?? t??? ?????c bi???t
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        return str;
    }
    IsFileIsImage(str) {
        return str?.match(/\.(jpeg|jpg|gif|png)$/) != null;
    }
    importFromFile(bstr) {
        /* read workbook */
        const wb = XLSX.read(bstr, { type: 'binary' });
        /* grab first sheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* save data */
        const data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
        return data;
    }
};
CommonService = __decorate([
    Injectable({
        providedIn: "root",
    })
], CommonService);
export { CommonService };
//# sourceMappingURL=common.service.js.map