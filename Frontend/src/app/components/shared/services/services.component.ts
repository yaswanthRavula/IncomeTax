import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  imageArray=[
    "../../../../assets/employee.jpg",
    "../../../../assets/t.jpg",
    "../../../../assets/it.jpg",
    "../../../../assets/p.jpg",
    "../../../../assets/q.jpg",
    "../../../../assets/r.jpg",
    "../../../../assets/s.jpg",
    "../../../../assets/p.jpg",
  ]
  titleArray=["Federal & State Tax Filing","FBAR/FATCA Processing","ITIN Processing", "Amendment Filing","Representaton Services","S-Corp","C-Corp","LLC"];
  descriptionArray=[
    "The federal government imposes the federal income tax legislation. As such, it applies to everyone in all 50 states, regardless of where they reside.",
    "As you prepare to file your federal tax return and related documents with the IRS, you should be aware that the federal government imposes mandatory reporting requirements ",
    "The IRS issues Individual Taxpayer Identification Numbers (ITINs) to nonresident and resident aliens, their spouses, and dependents who are ineligible for Social Security Numbers.",
    "The purpose of an amended return is to make adjustments to a prior year's tax return. Correcting errors and claiming a more beneficial tax status, such as a refund, is possible with an amended tax return.",
    "The Internal Revenue Service (IRS) also routinely conducts audits to verify the correctness of a taxpayer's return and specific transactions.",
    "An S corp or S corporation is a business structure permitted by the tax code to distribute its taxable income, credits, deductions, and losses directly to its shareholders. This gives it advantages over the more typical C corporation.",
    "A C corporation (or C-corp) is a legal structure for a corporation in which the owners are taxed separately from the entity. Additionally, C corporations, the most common type of business, are subject to corporate income taxation.",
    "A limited liability company (LLC) is a corporate structure in the United States that shields its owners from personal accountability for the firm's debts and liabilities. "
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
