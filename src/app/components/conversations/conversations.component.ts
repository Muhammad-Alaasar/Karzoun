import { Component } from '@angular/core';

@Component({
    selector: 'app-conversations',
    templateUrl: './conversations.component.html',
    styleUrls: ['./conversations.component.css'],
})
export class ConversationsComponent {
    friends: {
        username: string;
        lastMessage: string;
        profileImg: string;
        isActive: boolean;
    }[] = [
        {
            username: 'Christina Joy',
            lastMessage: 'Are you ready to get it free?',
            profileImg: '../../../assets/images/profile.jpg',
            isActive: false,
        },
        {
            username: 'Joy Philip Matew',
            lastMessage: 'Are you ready to get it free?',
            profileImg: '../../../assets/images/profile.jpg',
            isActive: true,
        },
        {
            username: 'Ryu Hwa-young',
            lastMessage: 'Are you ready to get it free?',
            profileImg: '../../../assets/images/profile.jpg',
            isActive: false,
        },
        {
            username: 'Joy Philip Matew',
            lastMessage: 'Are you ready to get it free?',
            profileImg: '../../../assets/images/profile.jpg',
            isActive: false,
        },
    ];
}
