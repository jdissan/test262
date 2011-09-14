// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator "void" uses GetValue
 *
 * @section 11.4.2
 * @path 11_Expressions/11.4_Unary_Operators/11.4.2_The_void_Operator/S11.4.2_A2_T2.js
 * @description If GetBase(x) is null, throw ReferenceError
 * @negative
 */

//CHECK#1
void x;
