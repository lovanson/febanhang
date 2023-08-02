import { Component, ViewChild,ElementRef } from '@angular/core';
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from "keen-slider"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

function ThumbnailPlugin(main: KeenSliderInstance): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          main.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      addActive(slider.track.details.rel)
      addClickEvents()
      main.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

@Component({
  selector: 'app-page-details01',
  templateUrl: './page-details01.component.html',
  styleUrls: ['./page-details01.component.scss'],
})
export class PageDetails01Component {
  currentRate = 4;
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  @ViewChild("thumbnailRef") thumbnailRef!: ElementRef<HTMLElement>

  slider!: KeenSliderInstance
  thumbnailSlider!: KeenSliderInstance
  public currentSlide = 1

  data = [
    {
      src: './assets/images/png/1.png',
      name: 'Marco Theme',
      date: '28 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/2.png',
      name: 'Lisa Theme',
      date: '14 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/3.png',
      name: 'Marshall Theme',
      date: '18 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/4.png',
      name: 'Chapman Theme',
      date: '30 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/5.png',
      name: '	Robic Theme',
      date: '20 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement),{
        initial: this.currentSlide,
          slideChanged: (s:any) => {
            this.currentSlide = s.track.details.rel
          },
      }
      this.thumbnailSlider = new KeenSlider(
        this.thumbnailRef.nativeElement,
        {
          initial: 0,
          slides: {
            perView: 4,
            spacing: 10,
          },
        },
        [ThumbnailPlugin(this.slider)]
      )
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
    if (this.thumbnailSlider) this.thumbnailSlider.destroy()
  }

  public RTLState = document.body.classList.contains("rtl") ? true : false
  constructor(private modalService: NgbModal) {
    document.getElementById("myonoffswitch55")?.addEventListener("click",()=>{
      this.customOptions = {
        loop: true,
        mouseDrag: true,
        autoplay: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        nav: true,
        rtl: true,
        navText: [
          '<button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>',
          '<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>',
        ],
        margin: 10,
        autoWidth: false,
        autoHeight: false,
        navSpeed: 100,

        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 2,
          },
          740: {
            items: 3,
          },
        },
      }
    })
    const elements = [
      document.getElementById("myonoffswitch54"),
      document.getElementById("reset-button")
    ]
    elements.map((ele)=>{
      ele?.addEventListener("click",()=>{
        this.customOptions = {
          loop: true,
          mouseDrag: true,
          autoplay: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          nav: true,
          rtl: false,
          navText: [
            '<button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>',
            '<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>',
          ],
          margin: 10,
          autoWidth: false,
          autoHeight: false,
          navSpeed: 100,

          responsive: {
            0: {
              items: 1,
            },
            400: {
              items: 2,
            },
            740: {
              items: 3,
            },
          },
        }
      })
    })

  }

  images = [944, 1011, 984].map((n) => `./assets/images/media/pictures/thumb-list/thumb-9.jpg`)

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    rtl: this.RTLState,
    navText: [
      '<button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>',
      '<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>',
    ],
    margin: 10,
    autoWidth: false,
    autoHeight: false,
    navSpeed: 100,

    responsive: {
      1880: {
        items: 9
      },
    },
  };

  galleryImages = [
    {
      small: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      medium: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      big: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
    },
    {
      small: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      medium: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      big: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
    },
    {
      small: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      medium: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      big: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
    },
    {
      small: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      medium: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      big: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
    },
    {
      small: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      medium: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      big: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
    },
    {
      small: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      medium: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      big: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
    },
    {
      small: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      medium: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
      big: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
    },
  ]

  closeResult = '';

  open(content: unknown) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
}
