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
  ]
  titleArray=["Individual Tax Services","ITIN Preparation","FBAR Compliance", "Tax Representation","Advanced Tax Paying","Tax Evalution","Extension Filling"];
  descriptionArray=[
    "As part of the US tax system, all US persons are obligated to file annual income tax returns along with other supporting documentation to report worldwide…",
    "An Individual Taxpayer Identification Number (ITIN) is a United States tax processing number issued by the Internal Revenue Service for those who…",
    "In addition to your annual US tax return filing responsibility, if you are a US person and have a foreign bank account or are a signatory on a foreign bank account…",
    "Tax audit representation, also called audit defense, is a service in which a tax or legal professional stands in on behalf of a taxpayer during an Internal Revenue Service or state income tax audit.",
    "Both the US and Indian govt allow credit for taxes paid to other countries and there is also a treaty between the US and India designed to reduce double taxation.",
    "a tax assessment is an evaluation or an estimate of value that is typically performed by a tax assessor. The assessment leads to an “assessed value,” which is a base number used in the calculation of the property tax.",
    "A filing extension is an exemption that can be made to either individual taxpayers or businesses that are unable to file a tax return to the federal government by the due date."
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
