import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'in-delete-product-model',
  templateUrl: './delete-product-model.component.html',
  styleUrls: ['./delete-product-model.component.scss']
})
export class DeleteProductModelComponent implements OnInit {

  @Input() product: any;
  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancelDelete() {
      this.cancel.emit();
  }

  confirmDelete() {
      this.confirm.emit();
  }
}