import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {CommentServiceService} from "../../../services/comment-service.service";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent implements OnInit {

  createComment = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    comment: new  FormControl('')
  })

  constructor(
    private _CommentService: CommentServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  create(){
    this._CommentService.createComment(this.createComment.value).subscribe(res =>{

      Swal.fire(
        'Good job!',
        'This comment has beeen save!',
        'success'
      )
      
      

    }, error => {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Something went wrong! '"+error.error.name+"'"
       
      })
    })

  }



}
