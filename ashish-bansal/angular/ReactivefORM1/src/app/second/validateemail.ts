import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule, Validators, ValidatorFn} from '@angular/forms'
import {FormControl,FormGroup} from '@angular/forms'
import {FormBuilder} from '@angular/forms'


export function ValidateEmail(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}