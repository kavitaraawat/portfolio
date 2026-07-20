import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Activity } from '../../services/portfolio.service';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.activities = this.portfolioService.getActivities();
  }
}