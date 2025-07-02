import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
  standalone: false 
})
export class ExchangePage implements OnInit {
  fromCurrency: string = 'USD';
  toCurrency: string = 'PHP';
  amount: number | null = null;
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  convert() {
    this.errorMessage = null;
    if (!this.fromCurrency || !this.toCurrency || !this.amount || this.fromCurrency === this.toCurrency) {
      this.result = this.amount;
      return;
    }
    const apiKey = 'fca_live_O3KwiRvW1gg7rMI4FqY07ML2JVyPeTxVtnDM0010'; // Replace with your real API key
    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${this.fromCurrency}&currencies=${this.toCurrency}`;
    this.http.get<any>(url).subscribe(
      data => {
        if (data && data.data && data.data[this.toCurrency]) {
          const rate = data.data[this.toCurrency];
          this.result = +(Number(this.amount) * rate).toFixed(2);
        } else {
          this.result = null;
          this.errorMessage = 'Conversion failed. Please try again.';
        }
      },
      error => {
        this.result = null;
        this.errorMessage = 'Conversion failed. Please try again.';
      }
    );
  }

  get formattedAmount(): string {
    if (this.amount === null || isNaN(Number(this.amount))) return '';
    return Number(this.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  get formattedResult(): string {
    if (this.result === null || isNaN(Number(this.result))) return '';
    return Number(this.result).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
