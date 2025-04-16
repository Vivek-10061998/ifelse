import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LazyHighchartComponent } from '../charts/lazy-highchart/lazy-highchart.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [LazyHighchartComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
 
  teamMembers: any[] = [];
  loading = true;

  showConfirm = false;
  selectedMember: any = null;

  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  chartOptions: Highcharts.Options = {
    chart: { type: 'column' },
    title: { text: 'Security Rating' },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    series: [{
      name: 'Rating',
      type: 'column', // ✅ correct literal type
      data: [40, 70, 50, 90, 60, 100, 80]
    }] as Highcharts.SeriesColumnOptions[] // ✅ THIS LINE FIXES IT
  };
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.http.get<any>('https://01.fy25ey01.64mb.io/').subscribe(res => {
          const data = res.grid_data; // ✅ Access the array
          this.teamMembers = data.map((item: { name: any; username: any; status: any; role: any; email: any; progress: any; teams: any; avatar: any; }, i: number) => ({
            name: item.name || 'Olivia Rhye',
            username: item.username || 'olivia',
            status: item.status || 'Customer',
            role: item.role || 'Product Designer',
            email: item.email || 'example@mail.com',
            progress: item.progress || Math.floor(Math.random() * 100),
            teams: item.teams || ['Design', 'Product', 'Marketing'],
            avatar: item.avatar || `https://randomuser.me/api/portraits/women/${i + 10}.jpg`
          }));
          this.loading = false;
        });
        
        
      }, 2000);
    }
    this.updatePagination();

  }

  confirmDelete(member: any) {
    this.selectedMember = member;
    this.showConfirm = true;
  }

  cancelDelete() {
    this.showConfirm = false;
    this.selectedMember = null;
  }

  deleteMember() {
    this.teamMembers = this.teamMembers.filter(m => m !== this.selectedMember);
    this.cancelDelete();
  }

  editMember(member: any) {
    alert(`Edit functionality coming soon for: ${member.name}`);
  }
 
  pageSize = 10;
currentPage = 1;
totalPages = 0;
paginatedMembers: any[] = [];
totalPagesArray: number[] = [];

updatePagination() {
  this.totalPages = Math.ceil(this.teamMembers.length / this.pageSize);
  this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  const start = (this.currentPage - 1) * this.pageSize;
  const end = start + this.pageSize;
  this.paginatedMembers = this.teamMembers.slice(start, end);
}

goToPage(page: number) {
  this.currentPage = page;
  this.updatePagination();
}

prevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.updatePagination();
  }
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.updatePagination();
  }
}

}
