import { Component, Input, OnInit } from '@angular/core';
import { AboutInterface } from './models/About';
 
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() about!: AboutInterface;
   constructor() { 
    this.about = 
      {
        text:"En Broker-Yacht ofrecemos una gama de barcos amplia y de calidad .Nos implicamos y les acompañamos en su proyecto desde el principio hasta el final en todas las fases de la venta o compra del barco. Acompañamos al cliente durante las visitas del barco y facilitamos el trato entre las partes. Tratamos su operacion, su proyecto de forma personal y profesional. Por nuestro conocimiento de los barcos de pasajes y nuestros contactos. Colaboramos con las empresas de clasificación internacionales como Riva, Princess, Benetou o Jeanneau.", 
        text2:"Su concesionario es su interlocutor privilegiado para ayudarle en todos los asuntos relacionados con la compra de un barco. Su concesionario le acompañará durante todo el proceso: desde su proyecto de compra hasta la reventa de su embarcación. Asimismo, se encargará de la entrega de su embarcación. Solicitudes de servicios posventa, repuestos, preguntas técnicas. Con su concesionario cerca de su casa o de su puerto de amarre, disfrutara de la experiencia de las marcas, servicios adaptados e innovadores, y ofertas claras y transparentes.a"
      }
    
  }

  ngOnInit(): void {
  }
}
// }
// export class AboutComponent implements OnInit {
//   public about: AboutInterface[];

//   constructor() { 
//     this.about = [ 
//       {
//         text:"______", 
//         image:"https://i.imgur.com/qlEt4Hw.jpg"
//       }
//     ]
//   }

//   ngOnInit(): void {
//   }

// 