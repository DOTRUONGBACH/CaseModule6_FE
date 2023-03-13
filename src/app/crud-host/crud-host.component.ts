import {Component,  OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CategoryServiceService} from "../../service/category-service.service";
import {Category} from "../model/Category";
import {AddressService} from "../../service/address.service";
import {Address} from "../model/Address";
import {CrudHostService} from "../../service/crud-host-service.service";
import {HttpHeaders} from "@angular/common/http";
import {SaveRoomInfoService} from "../../service/save-room-info.service";
import {SaveRoomImagesService} from "../../service/save-room-images.service";






@Component({
  selector: 'app-crud-host',
  templateUrl: './crud-host.component.html',
  styleUrls: ['./crud-host.component.css']
})
export class CrudHostComponent implements OnInit {
  categories?: Category[];
  addresses?: Address[];
  formCreate!: FormGroup;
  images: File[] = [];

  constructor(
    private crudService: CrudHostService,
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private categoryService: CategoryServiceService,
    private saveRoomInfoService:SaveRoomInfoService,
    private saveRoomImagesService: SaveRoomImagesService

  ) {}

  ngOnInit(): void {
    // Tạo formGroup
    this.formCreate = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      address: ['', Validators.required],
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
  }

  onSubmit() {
    // Nếu formCreate hợp lệ
    debugger
    if (this.formCreate.valid) {
      this.saveRoomInfoService.saveRoom(this.formCreate.value).subscribe(
        data => {
          const formData = new FormData();
          for (let i = 0; i < this.images.length; i++) {
            formData.append('files', this.images[i], this.images[i].name);
          }
          // Lưu ảnh bằng API thứ hai
          this.saveRoomImagesService.saveImg(formData,data).subscribe(
            response => {
              console.log('Room and images saved successfully');
            },
            error => {
              console.log('Error saving images:', error);
            }
          )
        },
        error => {
          console.log('Error saving room:', error);
        }
      )
    }
  };

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
}
