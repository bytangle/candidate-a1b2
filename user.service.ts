import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';


// The service below interacts with an external API to retrieve user data but it has an issue.
// Identity and fix the issue with this implementation
@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  getUserData(userId: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(`https://api.example.com/users/${userId}`);
  }
}