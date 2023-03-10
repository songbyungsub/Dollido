# Generated by Django 3.2 on 2023-01-05 22:22

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(help_text='이름을 입력해주세요', max_length=10, verbose_name='username')),
                ('email', models.EmailField(help_text='이메일 주소를 입력해주세요', max_length=64, unique=True, verbose_name='이메일 주소')),
                ('tel', models.CharField(help_text='전화번호를 입력해주세요. 입력 예시 : 01012345678', max_length=11, verbose_name='전화번호')),
                ('address', models.CharField(help_text='현 거주지 주소를 입력해주세요', max_length=30, verbose_name='주소')),
                ('is_staff', models.BooleanField(default=False, help_text='사용자가 관리사이트에 로그인할 수 있는지 여부 확인', verbose_name='관리자 권한')),
                ('is_active', models.BooleanField(default=False, help_text='사용자가 활성상태인지 여부 확인계정을 삭제하는 대신 이것을 선택 해제', verbose_name='활성화 상태')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
        ),
    ]
