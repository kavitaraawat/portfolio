import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, SkillCategory, Skill } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = [];
  skills: Skill[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.categories = this.portfolioService.getSkillCategories();
    this.skills = this.portfolioService.getSkillBadges();
  }
}