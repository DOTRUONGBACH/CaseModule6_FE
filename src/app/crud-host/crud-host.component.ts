import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
import {SheduleServiceService} from "../../service/shedule-service.service";



@Component({
  selector: 'app-crud-host',
  templateUrl: './crud-host.component.html',
  styleUrls: ['./crud-host.component.css']
})
export class CrudHostComponent implements OnInit {
  @ViewChild('circleDiv') circleDiv?: ElementRef;
  categories?: Category[];
  addresses?: Address[];
  formCreate!: FormGroup;
  images: File[] = [];
  rooms: any;
  p: number = 1;
  total: number = 0;
  currentRoom: any;
  previousStatus?: boolean;

  constructor(
    private crudService: CrudHostService,
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private categoryService: CategoryServiceService,
    private saveRoomInfoService: SaveRoomInfoService,
    private saveRoomImagesService: SaveRoomImagesService,
    private showRoomService: ShowRoomForGuestService,
    private getAccountId: LoginService,

  ) {
  }

  ngOnInit(): void {

    // Tạo formGroup
    this.formCreate = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
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

  close() {
    document.getElementById('successModal')?.classList.remove('show');
  }

  close2() {
    document.getElementById('statusModal')?.classList.remove('show');
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
              document.getElementById('successModal')?.classList.add('show');

              console.log('Room and images saved successfully');
            },
            error => {
              console.log('Error saving images:', error);
            }
          )
        },
        error => {
          console.log('Error saving room:', error);
          alert("something wrong")
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


  edit() {

  }

  toggleRoomStatus(room: any) {

    this.currentRoom = room
    if (room.status == true) {
      this.updateStt(room)
    } else {
      this.previousStatus = room.status;
      document.getElementById('statusModal')?.classList.add('show');
    }
  }


  No() {
    this.currentRoom.status = this.previousStatus;
    this.circleDiv?.nativeElement.classList.remove('success');
    this.circleDiv?.nativeElement.classList.add('danger');
    this.close2()
    location.reload()
  }

  Yes(room: any) {
    this.close2()
    this.updateStt(room)
  }

  updateStt(room: any) {
    this.crudService.updateStt(room.id, !room.status).subscribe((rs: any) => {
      room.status = !room.status;
      if (room.status) {
        this.circleDiv?.nativeElement.classList.remove('danger');
        this.circleDiv?.nativeElement.classList.add('success');
      } else {
        this.circleDiv?.nativeElement.classList.remove('success');
        this.circleDiv?.nativeElement.classList.add('danger');
      }
    });
  }






}
