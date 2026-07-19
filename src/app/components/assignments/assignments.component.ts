import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  template: `<section id="assignments" class="assignments-section">
    <div class="container-lg">
      <h2 class="section-title" data-aos="fade-up">Academic Assignments</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" *ngFor="let a of assignments; let i = index" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100">
          <div class="card h-100">
            <div class="card-header"><span class="badge bg-primary">{{a.grade}}</span><span>{{a.date}}</span></div>
            <div class="card-body"><h5 class="card-title">{{a.title}}</h5><p>{{a.description}}</p>
              <div><span class="tech" *ngFor="let t of a.tech">{{t}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  styles: [`.assignments-section { padding: 80px 20px; background: white; }
    .card-header { background: linear-gradient(135deg, #6366f1, #3b82f6); color: white; padding: 15px; display: flex; justify-content: space-between; }
    .tech { display: inline-block; background: #f0f4ff; color: #6366f1; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; margin-right: 5px; }`]
})
export class AssignmentsComponent {
  assignments = [
    { id: 1, title: 'Foundations of Data Analytics (DTAN-500)', description: 'Introduction to data analytics concepts and techniques', date: 'June-Aug 2026', grade: '', tech: ['Tableau', 'Python', 'R'] },
    { id: 2, title: 'Machine Learning Fundamentals', description: 'Overview of machine learning and applications', date: 'June-Aug 2026', grade: '', tech: ['AI', 'ML'] }  ];
}
