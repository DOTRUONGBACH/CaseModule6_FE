import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {CategoryServiceService} from "../../service/category-service.service";
import {Category} from "../model/Category";
import {AddressService} from "../../service/address.service";
import {Address} from "../model/Address";
import {CrudHostService} from "../../service/crud-host-service.service";
import {SaveRoomInfoService} from "../../service/save-room-info.service";
import {SaveRoomImagesService} from "../../service/save-room-images.service";
import {ShowRoomForGuestService} from "../../service/show-room-for-guest.service";
import {LoginService} from "../service/login/login.service";
import {ConfirmationService, MessageService} from "primeng/api";



@Component({
  selector: 'app-crud-host',
  templateUrl: './crud-host.component.html',
  styleUrls: ['./crud-host.component.css'],
  providers: [MessageService,ConfirmationService]

})
export class CrudHostComponent implements OnInit {

  categories?: Category[];
  addresses?: Address[];
  formCreate!: FormGroup;
  images: File[] = [];
  rooms: any;
  p: number = 1;
  total: number = 0;

  constructor(
    private crudService: CrudHostService,
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private categoryService: CategoryServiceService,
    private saveRoomInfoService: SaveRoomInfoService,
    private saveRoomImagesService: SaveRoomImagesService,
    private showRoomService: ShowRoomForGuestService,
    private getAccountId: LoginService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {

    // Tạo formGroup
    this.formCreate = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required,Validators.min(0)],
      category: new FormGroup({
        id: new FormControl()
      }),
      address: new FormGroup({
        id: new FormControl()
      }),
      addressRoom: ['', Validators.required],
      images: [[], Validators.required]
    });

    // Lấy danh sách categories từ server
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });

    // Lấy danh sách addresses từ server
    this.addressService.getAddress().subscribe(data => {
      this.addresses = data;
    });
    this.getRoom()
  }



  onSubmit() {
    // Nếu formCreate hợp lệ

    if (this.formCreate.valid) {
      const accountId = this.getAccountId.getAccountToken().id;
      this.saveRoomInfoService.saveRoom(this.formCreate.value, accountId).subscribe(
        data => {
          const formData = new FormData();
          for (let i = 0; i < this.images.length; i++) {
            formData.append('files', this.images[i], this.images[i].name);
          }
          // Lưu ảnh bằng API thứ hai
          this.saveRoomImagesService.saveImg(formData, data).subscribe(
            response => {
           this.showSuccess()
            },
            error => {
              this.showError()
            }
          )
        },
        error => {
          console.log('Error saving room:', error);
          this.showError()
        }
      )
    }
  }

  // Mảng urls để lưu đường dẫn tạm thời của ảnh
  urls: string[] = [];

  // Hàm được gọi khi chọn ảnh
  onselect(e: any) {
    // Nếu đã chọn file
    if (e.target.files.length > 0) {
      this.images = e.target.files;
      console.log(this.images)
    }

    // Hiển thị ảnh đã chọn
    this.urls = [];
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);
        }
      }
    }
  }

  getRoom() {
    this.showRoomService.getAll().subscribe((response: any) => {
      this.rooms = response;
      console.log(this.rooms)
      this.total = this.rooms.length;

    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getRoom();
  }

//chưa làm do backlog không yêu cầu.
  edit() {

  }

  // toggleRoomStatus(room: any) {
  //
  //   if (room.status == true) {
  //     this.updateStt(room)
  //   } else {
  //
  //   }
  // }


confirmChangeToggle(r:any){
    if (!r.status){
  this.confirmationService.confirm({
    message: 'This room is occupied,do you want to change the status?',
    accept: () => {
      this.crudService.updateStt(r.id, !r.status).subscribe((rs: any) => {
        r.status = true
        this.showSuccess()
      },error => {
        this.showError()

      });
    },reject:()=>{
      location.reload()
  }})}

    else {
      this.crudService.updateStt(r.id, !r.status).subscribe((rs: any) => {
        r.status = false
        this.showSuccess()
      },error => {
        this.showError()
      });
    }
}



//alert
  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Success!', key: 'c'});
  }

  showError() {
    this.messageService.add({severity: 'fail', summary: 'Fail', detail: 'Something wrong', key: 'c'})
  }


}
