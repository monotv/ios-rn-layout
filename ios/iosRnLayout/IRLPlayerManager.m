//
//  IRLPlayerManager.m
//  iosRnLayout
//
//  Created by Pierre Segalen on 09/02/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "IRLPlayerManager.h"
#import "IRLPlayerView.h"
#import <UIKit/UIKit.h>

@implementation IRLPlayerManager
{
  IRLPlayerView *_playerView;
}

RCT_EXPORT_MODULE()

- (UIView *) view
{
  if (_playerView == nil)
  {
    _playerView = [[IRLPlayerView alloc] initWithBridge:self.bridge];
  }
  return _playerView;
}

RCT_EXPORT_VIEW_PROPERTY(url, NSString)

@end
