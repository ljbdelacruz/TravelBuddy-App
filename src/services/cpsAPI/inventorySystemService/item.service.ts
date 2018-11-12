import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Headers } from '@angular/http';
import {GlobalDataService} from '../../singleton/global.data';
import {RequestService} from '../../request.service';
@Injectable()
export class IS_ItemService{
    headers:any;
    constructor(private gser:GlobalDataService, private rs:RequestService){
        this.headers=new Headers();
    }
    
    //#region Post
    Insert(id:string, title:string, desc:string, price:string, aid:string, oid:string, icid:string,
    ic:string, q:string, dtid:string, success, failed){
        var body=new FormData();
        body.append("id", id);
        body.append("title", title);
        body.append("desc", desc);
        body.append("price", price);
        body.append("aid", aid);
        body.append("oid", oid);
        body.append("icid", icid);
        body.append("ic", ic);
        body.append("q", q);
        body.append("dtid", dtid);
        this.rs.SimplifyPost(this.gser.cpsURL+"InventorySystem/IIInsert", this.headers, body, success.bind(this), failed.bind(this))
    }
    Remove(id:string, aid:string, oid:string, success, failed){
        var body=new FormData();
        body.append("id", id);
        body.append("aid", aid);
        body.append("oid", oid);
        this.rs.SimplifyPost(this.gser.cpsURL+"InventorySystem/IIRemove", this.headers, body, success.bind(this), failed.bind(this))
    }
    Update(id:string, title:string, desc:string, price:string, aid:string, oid:string, icid:string,
        ic:string, q:string, dtid:string, success, failed){
            var body=new FormData();
            body.append("id", id);
            body.append("title", title);
            body.append("desc", desc);
            body.append("price", price);
            body.append("aid", aid);
            body.append("oid", oid);
            body.append("icid", icid);
            body.append("ic", ic);
            body.append("q", q);
            body.append("dtid", dtid);
            this.rs.SimplifyPost(this.gser.cpsURL+"InventorySystem/IIUpdate", this.headers, body, success.bind(this), failed.bind(this))
    }
    GetByOwner(id:string, icid:string, aid:string, success, failed){
        var body=new FormData();
        body.append("id", id);
        body.append("icid", icid);
        body.append("aid", aid);
        this.rs.SimplifyPost(this.gser.cpsURL+"InventorySystem/IIGetByOwner", this.headers, body, success.bind(this), failed.bind(this))
    }
    //#endregion
    //#region Get
    GetCategory(id:string, aid:string, success, failed){
        this.rs.SimplifyGet(this.gser.cpsURL+"InventorySystem/IIGetByCategory?id="+id+"&aid="+aid, this.headers, success.bind(this), failed.bind(this))
    }
    //#endregion
    //#region Util  
    //functions
    // MToVM(object, success){
    //     var item=new UsersViewModel();
    //     item.set(object);
    //     success(item);
    // }
    // MsToVMs(list, success){
    //     var index=0;
    //     var nlist:UsersViewModel[]=[];
    //     if(list.length > 0){
    //         list.forEach(el => {
    //             this.MToVM(el, function(resp){
    //                 nlist.push(resp);
    //                 index++;
    //                 if(index==list.length-1){
    //                     success(nlist);
    //                 }
    //             }.bind(this))
    //         });
    //     }else{
    //         success(nlist);
    //     }
    // }
    //#endregion

}
