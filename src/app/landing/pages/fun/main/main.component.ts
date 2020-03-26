import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public dummy = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT11HMJfEHgPVGhZv0IEoUIe282-nadiB21gqGm6o4NMN2GyxgK',
    'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/country-sunrise-stephanie-laird.jpg',
    // tslint:disable-next-line: max-line-length
    'https://1.bp.blogspot.com/-MdaQwrpT4Gs/Xdt-ff_hxEI/AAAAAAAAQXE/oOgnysGd9LwoFLMHJ0etngKzXxmQkWc5ACLcBGAsYHQ/s400/Beautiful-Backgrounds%2B%2528122%2529.jpg',
    'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/02/pjimage-1549524348.jpg',
    'https://thumbs.dreamstime.com/t/horse-horizon-backlit-sunset-1798342.jpg',
    'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlsXSYT4R3PoBUSswNAGxle_BvxILqLhFcD1cF9zsHtOdOZxpM',
    'https://html5box.com/html5lightbox/images/lakeandballoon.jpg',
    // tslint:disable-next-line: max-line-length
    'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2015/04/irkutsk_and_lake_baikal/15342550-1-eng-GB/Irkutsk_and_Lake_Baikal.jpg',
    'https://www.thewowstyle.com/wp-content/uploads/2015/07/natural-wallpaper-for-desktop.jpeg',
    'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/48181678987_dd26a6ed67_k.jpg',
    'https://www.images.ch/wp-content/uploads/2018/10/17_Durand_INSITU_QuaiMariaBelgia_MathildaOlmi05_web-720x478.jpg',
    'https://materializecss.com/images/sample-1.jpg',
    'https://www.bestfunforall.com/wallpaperbetter/imgs/Nature%20Scenery%20wallpaper%20%201.jpg'
  ];

  public showModal = false;
  public image = '';

  public loading = false;

  constructor() { }

  ngOnInit() {
  }

  show(data) {
    this.showModal = true;
    this.image = data;
  }
  hide() {
    this.showModal = false;
    this.image = '';
  }

  onScroll() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.dummy.push(
      'https://www.images.ch/wp-content/uploads/2018/10/17_Durand_INSITU_QuaiMariaBelgia_MathildaOlmi05_web-720x478.jpg',
      'https://materializecss.com/images/sample-1.jpg',
      'https://www.bestfunforall.com/wallpaperbetter/imgs/Nature%20Scenery%20wallpaper%20%201.jpg',
      'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/02/pjimage-1549524348.jpg',
      'https://thumbs.dreamstime.com/t/horse-horizon-backlit-sunset-1798342.jpg',
      'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlsXSYT4R3PoBUSswNAGxle_BvxILqLhFcD1cF9zsHtOdOZxpM',
      'https://html5box.com/html5lightbox/images/lakeandballoon.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      );
    }, 2000);
  }
}
