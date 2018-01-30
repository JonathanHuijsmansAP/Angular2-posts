import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PostService } from './post.service';

@Component ({
   selector: 'post-search',
   templateUrl: './post-search.component.html'
})

export class PostSearchComponent {
    search: FormGroup;
    result_title: string;
    result_email: string;
    result_body: string;

    ngOnInit() {
       this.search = new FormGroup({
         name: new FormControl('')
       });
   }

   constructor(private productService: ProductService) {}

   onSubmit() {
       this.productService.searchProduct(this.search.value.name)
                 .subscribe(data => { this.result_title = data.title;
                                      this.result_email = data.email;
                                      this.result_body = data.body; });

   }
}
