import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Assignment } from '../../services/portfolio.service';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent {
  selectedAssignment: Assignment | null = null;
  assignments: Assignment[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.assignments = this.portfolioService.getAssignments();
  }

  openModal(assignment: Assignment) {
    this.selectedAssignment = assignment;
  }

  closeModal() {
    this.selectedAssignment = null;
  }
}