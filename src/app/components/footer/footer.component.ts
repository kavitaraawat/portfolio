import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, SocialLink } from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialLinks: SocialLink[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.socialLinks = this.portfolioService.getSocialLinks();
  }
}