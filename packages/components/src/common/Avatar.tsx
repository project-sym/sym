'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { clsx } from 'clsx'
import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'

const Avatar = forwardRef<
  ComponentRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={clsx('sym-avatar', className)}
    {...props}
  />
))

Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = forwardRef<
  ComponentRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={clsx('sym-avatar-image', className)}
    {...props}
  />
))

AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
  ComponentRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={clsx('sym-avatar-fallback', className)}
    {...props}
  />
))

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
