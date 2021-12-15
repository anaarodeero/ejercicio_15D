import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tamPipe' })
export class TamFicheroPipe implements PipeTransform{

  transform(tam: number) {
    return (tam / (1024 * 1024)).toFixed(2) + 'MB';
  }

}
