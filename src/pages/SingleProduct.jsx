import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const loader = async() => {
  return null
}

const SingleProduct = () => {
  return (
    <h1 className="text-4xl">SingleProduct</h1>
  )
}

export default SingleProduct