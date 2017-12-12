import { Component } from '@angular/core';

/**
 * @description Extends the Angular functionality
 * 
 * @how to use
 * ExtendedComponent({
 *  selector: '..',
 *  template: '...html'
 * })
 */
export function ExtendedComponent(component: Component) {
  return function ( target: any) {
    /**
     * code extentsion/ custom code
     * ...
     */

     /**
      * create component 
      */
    Component(component)(target);
    return target;
  }
} 