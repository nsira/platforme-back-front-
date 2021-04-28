import { IsDate, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  
}

export class CreateUserDto2 {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  
  @IsString()
  public nom: string;

  
  @IsString()
  public prenom: string;

  
  @IsDate()
  public birthDate: Date;

  @IsString()
  public pays: string;


  
}

