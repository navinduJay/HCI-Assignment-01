import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../authentication.service";
import swal from "sweetalert";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  activetab = "";
  status: string = localStorage.getItem("isLoggedIn");
  user: string = localStorage.getItem('token');
  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    window.onscroll = function() {};
  }

  getActiveTab(linkName: string) {
    this.activetab = linkName;
  }

  cLogout(): void {
    swal("See you again Ravi", "Successfully logged out", "success");
    this.authService.logout();
    this.router.navigate(["/user/login"]);
  }
}
