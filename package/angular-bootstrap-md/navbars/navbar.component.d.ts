import { NavbarService } from './navbar.service';
import { ElementRef, Renderer2, AfterViewInit, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
export declare class NavbarComponent implements AfterViewInit, OnInit {
    renderer: Renderer2;
    private _navbarService;
    iconBackground: string | string[];
    SideClass: string;
    containerInside: boolean;
    subscription: Subscription;
    navbarLinkClicks: any;
    shown: boolean;
    doubleNav: boolean;
    height: number;
    duration: number;
    collapse: boolean;
    showClass: boolean;
    collapsing: boolean;
    el: ElementRef;
    mobile: ElementRef;
    navbar: ElementRef;
    container: ElementRef;
    toggler: ElementRef;
    constructor(renderer: Renderer2, _navbarService: NavbarService);
    closeNavbarOnClick(navbarLinkClicks: any): void;
    addTogglerIconClasses(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggle(event: any): void;
    show(): void;
    hide(): void;
    readonly displayStyle: string;
    onResize(event: any): void;
    onScroll(): void;
}